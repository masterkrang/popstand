json.array!(@inquiries) do |inquiry|
  json.extract! inquiry, :id, :name, :email, :message
  json.url inquiry_url(inquiry, format: :json)
end
