import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button'
import '../styles/Recip.css';

const Recip = () => {
  const [products, setProducts] = useState([

    { id: 1, name: "сыр", active: false },
    { id: 2, name: "яйца", active: false },
    { id: 3, name: "молоко", active: false },
    { id: 4, name: "мука", active: false },
    { id: 5, name: "сливочное масло", active: false },
    { id: 6, name: "картофель", active: false },
    { id: 7, name: "паприка", active: false },
    { id: 8, name: "тыква", active: false },
    { id: 9, name: "мед", active: false },
    { id: 10, name: "фарш", active: false },
    { id: 11, name: "рис", active: false },
    { id: 12, name: "лук", active: false },
    { id: 13, name: "помидоры", active: false },
    { id: 14, name: "баклажаны", active: false },
    { id: 15, name: "макароны", active: false },
    { id: 16, name: "чеснок", active: false },
    { id: 17, name: "курица", active: false },
    { id: 18, name: "куриные крылья", active: false },
    { id: 19, name: "морковь", active: false },
    { id: 20, name: "спагетти", active: false },
    { id: 21, name: "ветчина", active: false },
    { id: 22, name: "говядина", active: false },
    { id: 23, name: "баранина", active: false },
    { id: 24, name: "грудинка", active: false },
    { id: 25, name: "рыба", active: false },
    { id: 26, name: "филе рыбы", active: false },
    { id: 27, name: "тунец", active: false },
    { id: 28, name: "салат листовой", active: false },
    { id: 29, name: "томатный соус", active: false },
    { id: 30, name: "томатная паста", active: false },
    { id: 31, name: "цукини", active: false },
    { id: 32, name: "брокколи", active: false },
    { id: 33, name: "сладкий перец", active: false },
    { id: 34, name: "болгарский перец", active: false },
    { id: 35, name: "капуста", active: false },
    { id: 36, name: "цветная капуста", active: false },
    { id: 37, name: "белокачанная капуста", active: false },
    { id: 38, name: "сливки", active: false },
    { id: 39, name: "креветки", active: false },
    { id: 40, name: "пармезан", active: false },
    { id: 41, name: "чиабатта", active: false },
    { id: 42, name: "солёные огурцы", active: false },
    { id: 43, name: "сметана", active: false },
    { id: 44, name: "горошек", active: false },
  ])
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

 const [ingridients,setIngridients]  =  useState([
    {
    name: "ТЕСТО",
    ingridients: [
    { name: "мука", weight: "600 граммов" },
    { name: "вода", weight: "250 миллилитров" },
    { name: "соль", weight: "1,5 чайной ложки" },
    { name: "растительное масло", weight: "20 миллилитров" }
    ]
    },
    {
    name: "НАЧИНКА",
    ingridients: [
    { name: "мясной фарш", weight: "300 граммов" },
    { name: "картофелины", weight: "4 штуки" },
    { name: "луковицы", weight: "2 штуки" },
    { name: "соль", weight: "по вкусу" },
    { name: "черного душистого перца", weight: "по вкусу" },
    { name: "зиры", weight: "по вкусу" },
    { name: "растительное масло", weight: "3 столовые ложки" }
    ]
    },
    {
    name: "ПАСТА С КРЕВЕТКАМИ",
    ingridients: [
    { name: "Спагетти", weight: "150 г" },
    { name: "Креветки (неочищенные)", weight: "300 г" },
    { name: "Сыр пармезан (или любой твёрдый сыр)", weight: "30-40 г" },
    { name: "Сливки жирностью 20%", weight: "180 мл" },
    { name: "Вино сухое белое", weight: "30 мл" },
    { name: "Масло сливочное", weight: "30 г" },
    { name: "Лук репчатый", weight: "40 г (0,5 шт.)" },
    { name: "Чеснок", weight: "2 зубчика" },
    { name: "Соль", weight: "по вкусу" },
    { name: "Перец чёрный молотый", weight: "по вкусу" },
    { name: "Паприка молотая", weight: "1 ч. ложка" },
    { name: "Петрушка свежая", weight: "3-4 веточки" }
    ]
    },
    {
    name: "ГАСПАЧО",
    ingridients: [
    { name: "Перец болгарский", weight: "3 штуки" },
    { name: "Помидоры", weight: "1-1,5 кг" },
    { name: "Лук репчатый", weight: "1 штука" },
    { name: "Чеснок", weight: "3-4 зубчика" },
    { name: "Чиабатта", weight: "3 кусочка" },
    { name: "Уксус винный", weight: "2 ст. ложки" },
    { name: "Соль", weight: "по вкусу" },
    { name: "Перец черный молотый", weight: "по вкусу" }
    ]
    },
    {
    name: "БРИЗОЛЬ",
    ingridients: [
    { name: "Для блинчиков:", weight: "" },
    { name: "Яйца", weight: "4 штуки" },
    { name: "Молоко", weight: "3 ст. ложки" },
    { name: "Соль", weight: "по вкусу" },
    { name: "", weight: "" },
    { name: "Для начинки:", weight: "" },
    { name: "Фарш мясной (свиной или свино-говяжий)", weight: "400 г" },
    { name: "Огурцы солёные", weight: "160 г (2 штуки)" },
    { name: "Сыр твёрдый", weight: "50 г" },
    { name: "Чеснок", weight: "1-2 зубчика" },
    { name: "Масло подсолнечное", weight: "2 ст. ложки" },
    { name: "Сметана", weight: "100 г" },
    { name: "Соль", weight: "по вкусу" },
    { name: "Перец чёрный молотый", weight: "по вкусу" },
    { name: "", weight: "" },
    { name: "Дополнительно:", weight: "" },
    { name: "Зелень свежая", weight: "для подачи" },
    { name: "Лук зелёный", weight: "для подачи" }
    ]
    },
    {
    name: "ЛЕЧО",
    ingridients: [
    { name: "Перец сладкий", weight: "2 кг" },
    { name: "Лук репчатый", weight: "1 кг" },
    { name: "Помидор", weight: "2 кг" },
    { name: "Масло растительное", weight: "150 г" },
    { name: "Соль", weight: "2 ч.л." },
    { name: "Сахар", weight: "4 ст.л." },
    { name: "Перец черный горошком", weight: "1 ч.л." },
    { name: "Перец душистый горошком", weight: "4 шт." },
    { name: "Лавровый лист", weight: "2 шт." },
    { name: "Уксус 9%", weight: "3 ст.л." }
    ]
    },
    {
    name: "КРУАССАН",
    ingridients: [
    { name: "Молоко", weight: "300 мл" },
    { name: "Масло сливочное", weight: "250 г" },
    { name: "Мука", weight: "600 г (4 стакана объёмом 250 мл)" },
    { name: "Сахар", weight: "3 ст. ложки" },
    { name: "Соль", weight: "1 ч. ложка" },
    { name: "Дрожжи сухие активные", weight: "2 ч. ложки" },
    { name: "Для глазировки:", weight: "" },
    { name: "Яйцо", weight: "1 штука" },
    { name: "Молоко", weight: "1 ст. ложка" }
    ]
    },
    {
    name: "СИННАБОНЫ",
    ingridients: [
    { name: "пшеничная мука", weight: "550 г" },
    { name: "дрожжи сухие", weight: "8 г" },
    { name: "яйца куриные", weight: "2 шт." },
    { name: "молоко", weight: "250 мл" },
    { name: "сливочное масло", weight: "80 г" },
    { name: "сахар", weight: "140 г" },
    { name: "соль", weight: "5 г" },
    { name: "Начинка", weight: "" },
    { name: "сахар коричневый", weight: "200 г" },
    { name: "корица молотая", weight: "25 г" },
    { name: "сливочное масло", weight: "80 г" },
    { name: "Крем", weight: "" },
    { name: "сыр сливочный", weight: "200 г" },
    { name: "сливочное масло", weight: "70 г" },
    { name: "сахарная пудра", weight: "100 г" }
    ]
    },
    {
    name: "КАРТОФЕЛЬ ПО ДЕРЕВЕНСКИ",
    ingridients: [
    { name: "картофеля", weight: "1,3 кг" },
    { name: "растительное масло", weight: "5 ст.л." },
    { name: "специи:", weight: "" },
    { name: "сладкой паприки", weight: "1ч.л. без верха" },
    { name: "куркумы", weight: "1ч.л. без верха" },
    { name: "соли", weight: "1 ч.л. без верха" },
    { name: "сухой чеснок", weight: "0,3 ч.л." },
    { name: "горчицы сухой или готовой", weight: "1 ч.л. без верха" },
    { name: "смеси специй для картофеля", weight: "1ч.л. без верха" }
    ]
    },
    {
    name: "ЗАПЕЧЕНАЯ ТЫКВА С МЕДОМ И ОРЕХАМИ",
    ingridients: [
    { name: "Тыква", weight: "450 г" },
    { name: "Мед", weight: "40 г" },
    { name: "Сахар коричневый", weight: "30 г" },
    { name: "Масло сливочное", weight: "30 г" },
    { name: "Орехи грецкие", weight: "40 г" },
    { name: "Соль", weight: "по вкусу" },
    { name: "Вода", weight: "2 ст.л." }
    ]
    },
    {
    name: "ДОЛМА",
    ingridients: [
    { name: "Говяжий фарш", weight: "1 кг" },
    { name: "Круглый рис", weight: "½ стакана" },
    { name: "Репчатый лук", weight: "4 головки" },
    { name: "Сушеная кинза (кориандр)", weight: "1 столовая ложка" },
    { name: "Сушеный базилик", weight: "1 столовая ложка" },
    { name: "Сушеная душица", weight: "1 чайная ложка" },
    { name: "Томатная паста", weight: "2 столовые ложки" },
    { name: "Вода", weight: "1 стакан" },
    { name: "Листья винограда", weight: "500 г" },
    { name: "Соль", weight: "по вкусу" },
    { name: "Молотый черный перец", weight: "по вкусу" }
    ]
    },
    {
    name: "МАКАРОНЫ ПО ФЛОТСКИ",
    ingridients: [
    { name: "Макароны", weight: "300 г" },
    { name: "Фарш", weight: "600 г" },
    { name: "Репчатый лук", weight: "1 головка" },
    { name: "Чеснок", weight: "2 зубчика" },
    { name: "Томатная паста", weight: "2 столовые ложки" },
    { name: "Растительное масло", weight: "2 столовые ложки" },
    { name: "Соль", weight: "по вкусу" },
    { name: "Молотый черный перец", weight: "по вкусу" }
    ]
    },
    {
    name: "КРЫЛЫШКИ БАФФАЛО",
    ingridients: [
    { name: "Крылья куриные", weight: "1,5 кг" },
    { name: "Соус Баффало", weight: "" },
    { name: "Масло сливочное", weight: "60 г" },
    { name: "Сахар коричневый", weight: "2 ст. ложки" },
    { name: "Соус томатный (или томатная паста)", weight: "3 ст. ложки" },
    { name: "Соус (соус чили)", weight: "1 ст. ложка" },
    { name: "Чеснок", weight: "1 зуб" },
    { name: "Перец черный", weight: "по вкусу" },
    { name: "Соль", weight: "½ ч. ложки" },
    { name: "Соус Блю чиз", weight: "" },
    { name: "Сыр мягкий", weight: "50 г" },
    { name: "Сметана", weight: "½ стакана" },
    { name: "Йогурт", weight: "½ стакана" },
    { name: "Чеснок", weight: "1 зуб" },
    { name: "Соль", weight: "½ ч. ложки" },
    { name: "Перец черный", weight: "по вкусу" },
    { name: "Сельдерей черешковый", weight: "2 штуки" },
    { name: "Морковь", weight: "2 штуки" }
    ]
    },
    {
    name: "САЛАТ С ХРУСТЯЩИМИ БАКЛАЖАНАМИ",
    ingridients: [
    { name: "Баклажаны", weight: "480 г" },
    { name: "Сливочный сыр", weight: "4,5 столовых ложек" },
    { name: "Укроп", weight: "18 г" },
    { name: "Кукурузный крахмал", weight: "1 стакан" },
    { name: "Подсолнечное масло", weight: "1,2 л" },
    { name: "Соль", weight: "1,5 столовых ложек" },
    { name: "Кунжутное масло", weight: "1,5 столовых ложек" },
    { name: "Помидоры", weight: "480 г" },
    { name: "Семечки подсолнуха", weight: "3 столовые ложки" },
    { name: "Зеленый лук", weight: "60 г" },
    { name: "Сладкий соус чили", weight: "10 столовых ложек" },
    { name: "Кинза", weight: "18 г" }
    ]
    },
    {
    name: "БАГЕТ С ЧЕСНОКОМ",
    ingridients: [
    { name: "Батон", weight: "1 Штука (рекомендую купить багет)" },
    { name: "Чеснок", weight: "1 Штука" },
    { name: "Петрушка", weight: "1 Штука (1 пучок)" },
    { name: "Масло сливочное", weight: "180 Грамм" },
    { name: "Итальянские травы", weight: "По вкусу (или любые специи на ваш вкус)" }
    ]
    },
    {
    name: "ПАСТА КАРБОНАРА",
    ingridients: [
    { name: "Спагетти", weight: "400 г" },
    { name: "Оливковое масло", weight: "6 столовых ложек" },
    { name: "Чеснок", weight: "2 зубчика" },
    { name: "Ветчина", weight: "300 г" },
    { name: "Яичный желток", weight: "4 штуки" },
    { name: "Тертый сыр пармезан", weight: "100 г" },
    { name: "Сливки 10%-ные", weight: "200 мл" },
    { name: "Соль", weight: "по вкусу" },
    { name: "Молотый черный перец", weight: "по вкусу" }
    ]
    },
    {
    name: "ХАШЛАМА",
    ingridients: [
    { name: "грудинка", weight: "ок. 1 кг" },
    { name: "помидоры", weight: "6-8 шт." },
    { name: "лук репчатый", weight: "6 шт." },
    { name: "перец болгарский", weight: "2 шт." },
    { name: "баклажаны", weight: "2 шт." },
    { name: "кабачки", weight: "2 шт." },
    { name: "морковь", weight: "2 шт." },
    { name: "перец красный острый", weight: "1 шт. (по желанию)" },
    { name: "кукуруза", weight: "1-2 шт." },
    { name: "чеснок", weight: "4-5 зубчиков" },
    { name: "томат-паста", weight: "2 ст. ложки" },
    { name: "паста острая (хариса, табаско или аналогичная)", weight: "2 ч. ложки (по желанию)" },
    { name: "растительное масло", weight: "100 мл" },
    { name: "специи", weight: "по вкусу (соль, перец, куркума, кориандр, кумин и др.)" },
    { name: "топленое масло", weight: "100 г" },
    { name: "вода", weight: "1,5 л" }
    ]
    }
]);

 const handleClickOpen = (value) => {
        setCurrentProduct(value)
     console.log(currentProduct)
        setOpen(true);
 };

const getUniques = () =>{
    return Array.from(new Set(selectedProducts))
};

const [currentProduct,setCurrentProduct] = useState({})

function checkboxHandler(product){
  const updatedProducts = products.map((p) =>
  p.id === product.id ? { ...p, active: !p.active } : p
);

  setProducts(updatedProducts);
  let matchedArr = []

    const matchingIngredients = ingridients.reduce((acc, curr) => {
      const matchingIngr = curr.ingridients.filter((ingredient) => {
        // Check if the product name contains the ingredient name (case-insensitive)
        const productName = product.name.toLowerCase();
        const ingredientName = ingredient.name.toLowerCase();
        if(productName.includes(ingredientName)){
          if(matchedArr.length){
            matchedArr.map((ell)=>{
              if(ell.name !== curr.name){
                  matchedArr.push(curr)
              }
            })
          }else{
            matchedArr.push(curr)
          }
        }
      });
    }, []);
    console.log(matchedArr)

    // Update the 'selectedProducts' state
      // Update the 'selectedProducts' state
      setSelectedProducts((prevSelected) =>
      [...prevSelected, ...matchedArr] 
    );
}


  // State to track selected products and their counts
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Function to add a product to the selectedProducts list
  const handleAddProduct = (productId) => {
    const selectedProduct = selectedProducts.find((product) => product.id === productId);
    if (selectedProduct) {
      const updatedSelectedProducts = selectedProducts.map((product) =>
        product.id === productId ? { ...product, count: product.count + 1 } : product
      );
      setSelectedProducts(updatedSelectedProducts);
    } else {
      const newSelectedProduct = { ...products.find((product) => product.id === productId), count: 1 };
      setSelectedProducts([...selectedProducts, newSelectedProduct]);
    }
  };

  // Function to remove a product from the selectedProducts list
  const handleRemoveProduct = (productId) => {
    const selectedProduct = selectedProducts.find((product) => product.id === productId);
    if (selectedProduct.count === 1) {
      const updatedSelectedProducts = selectedProducts.filter((product) => product.id !== productId);
      setSelectedProducts(updatedSelectedProducts);
    } else {
      const updatedSelectedProducts = selectedProducts.map((product) =>
        product.id === productId ? { ...product, count: product.count - 1 } : product
      );
      setSelectedProducts(updatedSelectedProducts);
    }
  };

  // Function to get unique recipes from selectedProducts

  return (
    <div className="recipe-list">
        <div className="product-list">
            <h2>Available Products:</h2>
            <ul className="product-items-container">
                {products.map((product) => (
                    <li key={product.id} className="product-item">
                        <div className="product-name">{product.name}</div>
                        <div className="product-buttons">
                            <Checkbox
                                checked={product.active}
                                onChange={() => checkboxHandler(product)}
                                defaultChecked
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      {selectedProducts.length > 0 && (
        <div className="selected-products">
         
          <h2>Possible Recipes:</h2>
          <ul>
                  {getUniques().map((recipe, index) => (
                      <li onClick={()=>handleClickOpen(recipe)} key={index} className="recipe-item">
                          {recipe.name}
                      </li>

                  ))}

          </ul>
        </div>
      )}
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {currentProduct?.name}
            </DialogTitle>
            <DialogContent>
                <div className="all_ingridients">
                    { currentProduct.ingridients ? currentProduct?.ingridients.map((ell)=>(
                        <div className="ingridient">{ ell.name }</div>
                    )) : ''}
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>закрыть</Button>
                <Button onClick={handleClose} autoFocus>
                    Понятно
                </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
};

export default Recip;
