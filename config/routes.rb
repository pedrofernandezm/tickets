Rails.application.routes.draw do
  scope :api do
    resources :sessions, only: [:create, :show, :destroy]
    resources :users
    namespace :agents do
      resources :tickets
    end
  end
end
