source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.0.1'
gem 'mysql2', '~> 0.4.5'
gem 'puma', '~> 3.0'
gem 'active_model_serializers', '~> 0.10.4'
gem 'bcrypt', '~> 3.1.7'
gem 'jwt', '~> 1.5.6'
gem 'jsonapi-serializers', '~> 0.16.1'

# gem 'rack-cors'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'faker'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
