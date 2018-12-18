Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => "homes#index"

  resources :products, only:  %i[index show]

  get '/contact_us', to:'contacts#contact_us'
  get '/about_us', to: 'about#about_us'
end
