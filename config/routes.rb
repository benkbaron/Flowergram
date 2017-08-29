Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :destroy, :update]
    resources :posts, only: [:create, :destroy, :show, :index]
    resources :comments, only: [:create, :destroy, :patch, :show, :index]
    resources :likes, only: [:create, :destroy]
    resources :follows, only: [:create]
    resource :session, only: [:create, :destroy, :show]


    delete 'follows/:followee_id', :to => 'follows#destroy'
  end

end
