#!/bin/bash

cat go.sum | awk '{print $1}' | sort | uniq -c | sort -nr | head -n 10
```

```bash