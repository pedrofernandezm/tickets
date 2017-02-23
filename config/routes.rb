Rails.application.routes.draw do
  scope :api do
    resources :sessions, only: [:create, :show, :destroy]
    resources :users
    scope '/:user_type' do
      resources :tickets
    end
  end
end
