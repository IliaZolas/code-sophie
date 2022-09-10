Rails.application.routes.draw do
  devise_for :users

  unauthenticated :user do
    devise_scope :user do
      get '/' => 'pages#home'
    end
  end

  authenticated :user do
    root 'dashboard#index'

    resources :dashboard
  end
  
  # resources :dashboard

  # root to: 'dashboard#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # API routing
# namespace :api, defaults: { format: :json } do
#   namespace :v1 do
#     resources :posts, only: [ :index, :show, :create ]
#     end 
#   end
end
