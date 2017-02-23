class CreateReplies < ActiveRecord::Migration[5.0]
  def change
    create_table :replies do |t|
      t.string :message
      t.integer :user_id
      t.integer :ticket_id

      t.timestamps
    end
  end
end
