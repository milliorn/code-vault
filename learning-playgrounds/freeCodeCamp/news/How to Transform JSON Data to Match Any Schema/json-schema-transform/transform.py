import json
from jsonschema import validate, ValidationError

with open("old_customers.json") as f:
    data = json.load(f)

print("Top-level type:", type(data))
if isinstance(data, dict):
    print("Keys:", list(data.keys()))
    if "customers" in data and isinstance(data["customers"], list):
        print("Sample customer record:")
        print(json.dumps(data["customers"][0], indent=2))
elif isinstance(data, list):
    print("Total records:", len(data))
    print("Sample record:")
    print(json.dumps(data[0], indent=2))
else:
    print("Unknown structure")

# Define the mapping from old field names to new field names
FIELD_MAPPING = {
    "full_name": "name",
    "email_address": "email",
    "mobile": "phone",
    "tier": "membership_level",
}


def transform_customer(customer, mapping):
    """
    Transforms a single customer record from the old schema to the new schema.
    Ignores fields not present in mapping.
    If a required field is missing, inserts 'Unknown' as a default.
    """
    return {
        new_key: customer.get(old_key, "Unknown")
        for new_key, old_key in mapping.items()
    }


# Preview a single transformed record
sample_transformed = transform_customer(data["customers"][0], FIELD_MAPPING)
print("Transformed sample customer:")
print(json.dumps(sample_transformed, indent=2))


def transform_all_customers(customers, mapping):
    """
    Transforms a list of customer records using the field mapping.
    Returns a list of transformed customer dicts.
    """
    return [transform_customer(c, mapping) for c in customers]


# Transform all customer records
transformed_customers = transform_all_customers(data["customers"], FIELD_MAPPING)

# Preview the first transformed record
print("First transformed customer (batch):")
print(json.dumps(transformed_customers[0], indent=2))

# Prepare final output structure
output_data = {"customers": transformed_customers}

# Write to a new JSON file
with open("transformed_customers.json", "w") as f:
    json.dump(output_data, f, indent=2)

print('Transformed data written to "transformed_customers.json"')

# Define the schema your output must conform to
output_schema = {
    "type": "object",
    "properties": {
        "customers": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "full_name": {"type": "string"},
                    "email_address": {"type": "string"},
                    "mobile": {"type": "string"},
                    "tier": {"type": "string"},
                },
                "required": ["full_name", "email_address", "mobile", "tier"],
            },
        }
    },
    "required": ["customers"],
}

# Load the output file for validation
with open("transformed_customers.json") as f:
    output_data = json.load(f)

try:
    validate(instance=output_data, schema=output_schema)
    print("✅ Output data is valid and matches the target schema.")
except ValidationError as e:
    print("❌ Output data is INVALID:", e.message)
