import {useState} from 'react'
import {debounce} from '@/utils/debounce'

export function useNavigateItems(reference){
    /*This Hook recive an reference of an element with scroll and a list of items inside of the element. 
    Then navigate throw the items using cont = (index of item) and then using the scrollTo function set an scroll
    equal to the width of the reference*cont making posible a slider*/
    const [contador, setContador] = useState(0)
    let cont = contador

    //function to see the current item of the list
    function seeCurrentItem(){
        let itemsLength = Math.round(reference.current.scrollWidth/reference.current.offsetWidth)
        cont += 1
        setContador(cont)
        if(cont < itemsLength){
            reference.current.scrollTo({
                top:0, 
                left:reference.current.offsetWidth*cont,
                behavior:"smooth",
            })
        }
        // Otherwise, the counter is equal to the number of items, so we reset it to its initial value
        else{ 
            cont = -1
            setContador(cont)
            seeCurrentItem()
        }         
    }

    // Function to set the index of the element to view
    function updateCont(index) {
        cont = index - 1;
        setContador(cont);
        seeCurrentItem();
    }

    // Function to update the navigation position by scrolling the images
    function updateContByScroll() {
        if (reference.current !== undefined && reference.current !== null) {
            updateCont(Math.round(reference.current.scrollLeft / reference.current.offsetWidth));
        }
    }

    // Function to update the navigation status when the user scrolls
    const processScrollChange = debounce(() => updateContByScroll(), 100);

    return { contador, updateCont, processScrollChange };
}