class AddTagsToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :tags, :text, array: true, default: []
  end
end
