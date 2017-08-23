# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all

demoUser = User.create!({full_name: "Hyacinth Bucket", username: "HyacinthBucket", contact_info: "hbouquet@gmail.com", password: "password"})
