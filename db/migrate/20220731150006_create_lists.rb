class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.string :list_name
      t.string :list_description
      t.belongs_to :user 

      t.timestamps
    end
  end
end
