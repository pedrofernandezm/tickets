Rails.application.routes.draw do
  scope :api do
    resources :sessions, only: [:create, :show, :destroy]
    resources :users
    namespace :agents do
      resources :tickets, only: [:index, :show, :solve] do
        resources :replies, only: [:index, :create]
      end
    end

    namespace :customers do
      resources :tickets, only: [:index, :create, :show, :solve] do
        resources :replies, only: [:index, :create]
      end
    end
  end
end
