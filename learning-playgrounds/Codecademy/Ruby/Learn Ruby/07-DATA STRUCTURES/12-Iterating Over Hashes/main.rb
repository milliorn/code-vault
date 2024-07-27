secret_identities = {
    "The Batman" => "Bruce Wayne",
    "Superman" => "Clark Kent",
    "Wonder Woman" => "Diana Prince",
    "Freakazoid" => "Dexter Douglas"
}

# Use .each to iterate over the secret_identities hash.
secret_identities.each do |k, v|
  puts "#{k}: #{v}"
end