class Ticket < ApplicationRecord
  include AASM

  aasm do
    state :opened, initial: true
    state :pending, :resolved, :closed

    event :pend do
      transitions from: :open, to: :pending
    end

    event :resolve do
      transitions from: :pending, to: :resolved
    end

    event :close do
      transitions from: :resolved, to: :closed
    end
  end

  has_secure_token :uuid

  belongs_to :customer

  has_many :replies

  validates :subject, presence: true
  validates :description, presence: true

end
