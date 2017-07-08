import React, { Component } from 'react'

class ModePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modes: [
                {id: 1, heading: 'Title', content: 'description'},
                {id: 2, heading: 'Title2', content: 'description2'}
            ]
        }
    }

    findElement(arr, propName, propValue) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][propName] = propValue) {
                return arr[i];
            } 
        }
    }
    

    render() {
        let paramId = this.props.match.params
        let mode = this.findElement(this.state.modes, "id", paramId)

        return (
            <div>
                <article>
                    <h2>{ mode.heading }</h2>
                    <p> Everyday you eat different type of food group. The first food groups that you start with is
                        foods
                        rich in protein, followed by legumes and pulses, carbs and fruits which you rotate till the
                        90-day of the diet schedule. It is essential to stick with the diet schedule in order to have
                        visible results at the end of the day!
                    </p>
                    <p>
                        Everyday you eat different type of food group. The first food groups that you start with is foods
                        rich in protein, followed by legumes and pulses, carbs and fruits which you rotate till the
                        90-day of the diet schedule. It is essential to stick with the diet schedule in order to have
                        visible results at the end of the day!
                        Day 1 – Protein – Foods rich in protein:
                        Meat – pork, chicken, fish, lamb, beef and others, milk, curd, soy, cheese, dairy products, soy
                        products, etc. You can combine them with non starchy veggies such as cucumbers, tomatoes,
                        spinach, cabbage, red and green peppers, red beet, turnip, cauliflower. You can eat a few slices
                        of whole wheat bread.
                        Meal examples:
                        Breakfast: Fruits
                        Don’t mix the fruits and veggies- it is a rule. Eat them separately like this: Whenever you feel
                        like eating some fruit like peaches, pears, apples, melon and so on – eat them separately,
                        without any other fruits. The point is that you should eat only one fruit group.
                        Lunch:
                        Grilled steaks ( pork, lamb, beef)
                        Grilled meatballs
                        Cheese Shoppe
                        Fish – steamed or grilled. It should not be fried
                        Pork with cabbage
                        Poached eggs
                        The meat should be combined with a salad made with veggies such as tomatoes, peppers, cucumbers,
                        cheese, onion, lettuce.
                        The dinner should be the same as the lunch. It is essential that you should eat less this time –
                        large lunch, and small dinner!

                        Day 2 – Legume and pulses – potatoes, rice, soy, beans, green beans, peas, lentils and corn.
                        Meal examples:
                        Breakfast: Fruits
                        Keep in mind the rule for eating only one fruit group !
                        Lunch:
                        Vegetarian stuffed cabbage
                        Lentils
                        Bean soup
                        (Mushroom) risotto
                        Stuffed peppers without meat
                        Stew with potatoes and carrots
                        Stew with rice
                        You can add more color to your diet – you can eat any type of veggies plus a whole wheat bread.
                        You can also add some salt and ingredients so as to make your meals delicious as hell. Keep in
                        mind that your body needs some ingredients as well as salt in moderation.
                        Dinner: same as lunch
                        Anything that has sweet and salty flavour is good for your carb day – cakes, ice creams, pizza,
                        spaghetti, pastries, pasta. You can make a mushroom sauce but without meat.
                        Day 3 – Carbs
                        Example of a meal for your carb day:
                        Breakfast: Only one fruit group, remember?
                        Lunch: You can prepare for youself an easy spaghetti mushroom sauce. Add some spices to the
                        tomato sauce.
                        Pastries: a toast with jam
                        A vegetarian Lasagna
                        Vegetarian Pasta with mushroom sauce
                        Ice cream Cakes
                        Dinner: A few pieces like 2 or 3 pieces of cake or other type of pastry
                        Biscuits or a few sweets
                        3 or 4 balls of ice cream
                        Eat a few blocks (2 or 3) of natural chocolate
                        Day 4 – Fruits
                        You can eat any fruit group but you already know that you should not eat them at one and the
                        same time. You should consume fresh and dried fruits but you should pay attention to the fruit
                        sugar in the dried ones. ( Before eating you can soak them so as to prepare them easier). You
                        can also eat fruit juices, compotes. During the 4th day of your diet you can finally eat seeds,
                        nuts in case you feel like eating only fruits is not enough for your body. You still remember
                        that you should not mix the fruits, don’t you?
                        Eat on the fruit day different fruit group on breakfast, lunch and dinner. For example, you can
                        eat bananas on breakfast, peaches on lunch and appleas on dinner. Simple as that!
                    </p>
                </article>
            </div>
        );
    }
}
export default ModePage
