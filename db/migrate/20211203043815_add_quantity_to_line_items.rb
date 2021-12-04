class AddQuantityToLineItems < ActiveRecord::Migration[6.0]
  def change
    add_column :line_items, :quantity, :interger, default: 1
  end
end
