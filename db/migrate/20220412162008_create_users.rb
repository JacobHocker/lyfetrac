class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :password_confirmation
      t.string :movie_list
      t.string :music_list
      t.string :game_list

      t.timestamps
    end
  end
end
