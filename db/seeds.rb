# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Jacob", user_image_url: "N/A", password: "milkers", password_confirmation: "milkers")
List.create(list_name: "Test List One", list_description: "This is the description test", user_id: 1)
ListItem.create(list_item_content: "List Item #1 for user Jacob", priority: "Normal", completion: false, list_id: 1)
ListItem.create(list_item_content: "List Item #2 for user Jacob", priority: "Urgent", completion: false, list_id: 1)