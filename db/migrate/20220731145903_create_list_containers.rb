class CreateListContainers < ActiveRecord::Migration[6.1]
  def change
    create_table :list_containers do |t|

      t.timestamps
    end
  end
end
