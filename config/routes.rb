Rails.application.routes.draw do
  resources :sessions, only: [:create, :show, :destroy]
  resources :tickets
  resources :users
end
