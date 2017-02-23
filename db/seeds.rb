ticket_states = %w(opened pending resolved closed)
password = "Secret!"

3.times do
  Customer.create(
    email: Faker::Internet.email,
    password: password
  )
end

3.times do
  Agent.create(
    email: Faker::Internet.email,
    password: password
  )
end

Agent.create(
  email: "agent@tickets.com",
  password: password
)

Customer.create(
  email: "customer@tickets.com",
  password: password
)

10.times do
  Ticket.create(
    subject: Faker::Lorem.sentence,
    description: Faker::Lorem.paragraph,
    customer_id: Customer.all.sample.id,
    aasm_state: ticket_states.sample
  )
end
