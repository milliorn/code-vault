# Delete

Almost there! Let’s handle the “delete” part of our case statement, which will remove whatever key the user specifies from the hash. (This will be very similar to what we did for “add” and “update.”)

Ruby makes it easy to remove a movie/rating pair from our hash: we just write movies.delete(title.to_sym)!
