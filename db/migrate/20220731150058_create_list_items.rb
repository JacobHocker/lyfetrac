class CreateListItems < ActiveRecord::Migration[6.1]
  def change
    create_table :list_items do |t|
      t.string :list_item_content
      t.string :priority 
      t.boolean :completion
      t.belongs_to :list 
      t.timestamps
    end
  end
end
