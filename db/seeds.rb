# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Post.delete_all
Comment.delete_all
Like.delete_all

hyacinth = User.create!({full_name: "Hyacinth Bucket", username: "LadyoftheHouse",
  contact_info: "hbouquet@gmail.com", password: "password", profile_pic: File.open("app/assets/images/hyacinth_profile_pic.jpg")})

daisy = User.create!({full_name: "Daisy", username: "DaisyLovesOnslow",
  contact_info: "daisy@gmail.com", password: "password", profile_pic: File.open("app/assets/images/daisy.jpg")})
rose = User.create!({full_name: "Rose", username: "Rose",
  contact_info: "rose@gmail.com", password: "password", profile_pic: File.open("app/assets/images/rose-profile-pic.jpg")})
onslow = User.create!({full_name: "Onslow", username: "MisterOnslow",
  contact_info: "onslow@gmail.com", password: "password", profile_pic: File.open("app/assets/images/onslow.jpg")})


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
post15 = Post.create!({caption: "So much green!", author: onslow,
  image: File.open("app/assets/images/greenplants.jpg")})

  Comment.create!({body: "Gorgeous! Is that by the baseball fields?", post_id: post7.id, author_id: hyacinth.id})
  Comment.create!({body: "Yes!", post_id: post7.id, author_id: daisy.id})
  Comment.create!({body: "I thought so.", post_id: post7.id, author_id: hyacinth.id})
  Comment.create!({body: "Beautiful!", post_id: post7.id, author_id: hyacinth.id})
  Comment.create!({body: "Beautiful!", post_id: post1.id, author_id: daisy.id})
  Comment.create!({body: "Thanks, Daisy!", post_id: post1.id, author_id: hyacinth.id})
  Comment.create!({body: "I just loooove it!", post_id: post1.id, author_id: onslow.id})
  Comment.create!({body: "Hi all!", post_id: post1.id, author_id: rose.id})
  Comment.create!({body: "Nice!", post_id: post3.id, author_id: onslow.id})
  Comment.create!({body: "Hi all!", post_id: post3.id, author_id: rose.id})
  Comment.create!({body: "Nice!", post_id: post7.id, author_id: onslow.id})
  Comment.create!({body: "Oh, nice!", post_id: post9.id, author_id: onslow.id})
  Comment.create!({body: "I do appreciate this one.", post_id: post12.id, author_id: hyacinth.id})
  Comment.create!({body: "Delightful!", post_id: post15.id, author_id: rose.id})

  Like.create!({liker_id: daisy.id, post_id: post1.id})
  Like.create!({liker_id: daisy.id, post_id: post2.id})
  Like.create!({liker_id: daisy.id, post_id: post3.id})
  Like.create!({liker_id: daisy.id, post_id: post5.id})
  Like.create!({liker_id: daisy.id, post_id: post6.id})
  Like.create!({liker_id: daisy.id, post_id: post10.id})
  Like.create!({liker_id: daisy.id, post_id: post11.id})
  Like.create!({liker_id: daisy.id, post_id: post12.id})
  Like.create!({liker_id: daisy.id, post_id: post15.id})
  Like.create!({liker_id: hyacinth.id, post_id: post1.id})
  Like.create!({liker_id: hyacinth.id, post_id: post2.id})
  Like.create!({liker_id: hyacinth.id, post_id: post3.id})
  Like.create!({liker_id: hyacinth.id, post_id: post5.id})
  Like.create!({liker_id: hyacinth.id, post_id: post8.id})
  Like.create!({liker_id: hyacinth.id, post_id: post11.id})
  Like.create!({liker_id: hyacinth.id, post_id: post14.id})
  Like.create!({liker_id: hyacinth.id, post_id: post15.id})
  Like.create!({liker_id: onslow.id, post_id: post1.id})
  Like.create!({liker_id: onslow.id, post_id: post4.id})
  Like.create!({liker_id: onslow.id, post_id: post6.id})
  Like.create!({liker_id: onslow.id, post_id: post7.id})
  Like.create!({liker_id: onslow.id, post_id: post10.id})
  Like.create!({liker_id: onslow.id, post_id: post13.id})
  Like.create!({liker_id: rose.id, post_id: post1.id})
  Like.create!({liker_id: rose.id, post_id: post2.id})
  Like.create!({liker_id: rose.id, post_id: post4.id})
  Like.create!({liker_id: rose.id, post_id: post7.id})
  Like.create!({liker_id: rose.id, post_id: post11.id})
  Like.create!({liker_id: rose.id, post_id: post12.id})
  Like.create!({liker_id: rose.id, post_id: post13.id})
  Like.create!({liker_id: rose.id, post_id: post15.id})

  
