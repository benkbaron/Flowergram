# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Post.delete_all
hyacinth = User.create!({full_name: "Hyacinth Bucket", username: "LadyoftheHouse",
  contact_info: "hbouquet@gmail.com", password: "password", profile_pic: File.open("app/assets/images/hyacinth_profile_pic.jpg")})


daisy = User.create!({full_name: "Daisy", username: "DaisyLovesOnslow",
  contact_info: "daisy@gmail.com", password: "password", profile_pic: File.open("app/assets/images/daisy.jpg")})


post1 = Post.create!({caption: "So lovely!", author: hyacinth,
  image: File.open("app/assets/images/bouquet1.jpg")})
post2 = Post.create!({caption: "Richard gave these to me! He's very thoughtful, my Richard.", author: hyacinth,
  image: File.open("app/assets/images/bouquet2.jpg")})
post3 = Post.create!({caption: "Sheridan sent these with a card.", author: hyacinth,
  image: File.open("app/assets/images/bouquet3.jpg")})
post4 = Post.create!({caption: "A gift for Emmet, shame he couldn't make my candlelight supper.", author: hyacinth,
  image: File.open("app/assets/images/bouquet4.jpg")})

post5 = Post.create!({caption: "Onslow was busy this Valentine's day, but he said I could use me pocket money for these!", author: daisy,
  image: File.open("app/assets/images/bouquet5.jpg")})
