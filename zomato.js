function myFun1()
{
    var items={
                 VegBiryani:100,
                 ChickenBiryani:150,
                 Paneer:100,
                 PalakPaneer:120,
                 MuttonBiryani:200,
                 VegPulav:50,
                 VegBurger:60,
                 ChickenBurger:150,
                 CurdRice:80,
                 TomatoRice:70,
              
              printAllItems()
              {
                   document.write(Object.keys(items)+'<hr>');
              },
              printTotalPriceOfItems()
              {
                var total=this.Object.values.reduce(function(price,t){
                         t=t+price;
                })
                document.write('total price of items is:'+total+'<hr>');
              },
              printTotalPriceOfItemsWith25Discount()
              {

              },
              searchingItem(item)
              {
                document.write(items.indexOf('s'))
              }
            }
            items.printAllItems();
            items.printTotalPriceOfItems();
            items.searchingItem();
}