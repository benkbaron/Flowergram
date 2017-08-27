Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :destroy]
    resources :posts, only: [:create, :destroy, :show, :index]
    resources :comments, only: [:create, :destroy, :patch, :show, :index]
    resource :likes, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

end
