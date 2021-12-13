class StoreController < ApplicationController
  include CurrentCart
  skip_before_action :authorize
  before_action :set_cart

  def index
    search = params[:search].present? ? params[:search] : nil
    category = params[:category].present? ? params[:category] : nil

    @categories = category_list()

    if search
      @products = Product.search(search)
    elsif category
      @products = Product.search(category, fields: [:category]) #it give with respect to coulmns
    else
      @products = Product.order(:title) #it gives alphabetical order
    end
  end

  def category_list
    p = Product.all

    category = []
    p.each do |p|
      category.push(p.category)
    end

    return category.uniq
  end
end
