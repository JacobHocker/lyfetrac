class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :password_confirmation
      t.string :user_image_url

      t.timestamps
    end
  end
end
