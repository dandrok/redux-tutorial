import { useSelector } from "react-redux"
import { RootState } from "../../store"


// komponent zostaje wyrenderowany  
// w trakcie renderowania zostaje wywolany useSelector hook
// useSelector ma przekazana funkcje z stanem (RootState) naszej aplikacji 
// i w tej funkcji wybieramy na jaki reducer mamy nasluchiwac
// w naszym przypadku jest to counter gdzie okrelislismy ze initialValue nazywa sie value
// zatem mamy counter.value
// useSelector subscybuje nasz komponent do wybranej wartosci counter.value w naszym storze
// co oznacza ze gdy kiedykolwiek counter.value sie zmieni to component zostanie o tym powiadomiony
// gdy counter.value sie zmieni to redux porownuje poprzednia wartosc z nowa wartoscia
// jezeli wartosc sie zmienila to redux trigeruje powiadomienie do subskrybowania komponentu
// po otrzymaniu powiadomienia component zostaje ponownie wyrerendowany poniewaz wartosc counter sie zmienila
// component aktualizuje sie z nowa wartoscia counter ze store
// nowa wartosc zostaje wyswietlona i widoczna na UI

export const RedCounter = () => {



    const count = useSelector((state: RootState) => state.counter.value)

    return (
        <div style={{background: 'red', padding: '20px'}}>
            <p>
                {count}
            </p>
        </div>
    )
}