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
post5 = Post.create!({caption: "From my garden! Pity they only lasted a brief time. I told Richard to water them carefully while I was on holiday at my sister Violet's, but he forgot.", author: hyacinth,
  image: File.open("app/assets/images/sauder_flower.png")})

post6 = Post.create!({caption: "Onslow was busy this Valentine's day, but he said I could use me pocket money for these!", author: daisy,
  image: File.open("app/assets/images/bouquet5.jpg")})

post7 = Post.create!({caption: "In the park!", author: daisy,
  image: File.open("app/assets/images/tulips.jpg")})
post8 = Post.create!({caption: "Part of the museum.", author: daisy,
  image: File.open("app/assets/images/greenhouse.jpg")})
post9 = Post.create!({caption: "Another view of the museum's green house.", author: daisy,
  image: File.open("app/assets/images/greenhouse2.jpg")})
post10 = Post.create!({caption: "My favorite!!", author: daisy,
  image: File.open("app/assets/images/tavin-flower.jpg")})
post11 = Post.create!({caption: "Saw these on my way to visit Sheridan.", author: hyacinth,
  image: File.open("app/assets/images/sunflowers.jpg")})
post12 = Post.create!({caption: "What cute tiny blossoms.", author: hyacinth,
  image: File.open("app/assets/images/tiny-flowers.jpg")})
post13 = Post.create!({caption: "Growing in my garden.", author: hyacinth,
  image: File.open("app/assets/images/close-up-flower.jpg")})
post14 = Post.create!({caption: "More from my garden.", author: hyacinth,
  image: File.open("app/assets/images/garden-flowers.jpg")})
