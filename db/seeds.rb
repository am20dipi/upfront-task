# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Task.create!(name: "Go to carwash", task_date: "", completed: true)
Task.create!(name: "Pick up grandma", task_date: "", completed: true)
Task.create!(name: "Go to bank", task_date: "Tuesday", completed: false)



TaskNote.create!(content: "Auto Shine is having a sale on full carwashes.", task_id: 1)
TaskNote.create!(content: "Bring cash for tip!", task_id: 1)