class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :show_id
      t.text :copy
      t.boolean :like

      t.timestamps
    end
  end
end
