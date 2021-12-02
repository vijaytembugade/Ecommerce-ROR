class StoreController < ApplicationController
  def index
    @products = Product.order(:title) #it gives alphabetical order
  end
end
