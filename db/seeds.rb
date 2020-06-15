MENU_NAMES= ['Breakfast', 'Lunch', 'Dinner', 'Dessert']

4.times do
    Menu.create(
        name: MENU_NAMES.pop()
    )
end

puts 'done'