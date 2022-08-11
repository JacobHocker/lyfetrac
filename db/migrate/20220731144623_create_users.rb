class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :user_image_url
      t.string :email
      t.string :password
      t.string :password_confirmation

      t.timestamps
    end
  end
end
