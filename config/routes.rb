Rails.application.routes.draw do
  scope :api do
    resources :sessions, only: [:create, :show, :destroy]
    resources :tickets
    resources :users
  end
end
