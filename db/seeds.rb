ticket_states = %w(opened pending resolved closed)

3.times do
  Customer.create(
    email: Faker::Internet.email,
    password: "Password1!"
  )
end

3.times do
  Agent.create(
    email: Faker::Internet.email,
    password: "Password1!"
  )
end

10.times do
  Ticket.create(
    subject: Faker::Lorem.sentence,
    description: Faker::Lorem.paragraph,
    user_id: Customer.all.sample.id,
    aasm_state: ticket_states.sample
  )
end
