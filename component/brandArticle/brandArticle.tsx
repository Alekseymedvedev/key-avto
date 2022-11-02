import React, {FC} from 'react';
import cls from './brandArticle.module.scss'


interface T {
    children?: any
}

const BrandArticle: FC<T> = ({children}) => {
    // const router = useRouter()
    // const {id} = router.query
    return (
        <section>
            <h1>BrandPage</h1>
            {/*<h2>Ремонт OPEL</h2>*/}
            {/*<p>*/}
            {/*    Ремонт авто марки {name} наш сервис выполняет уже более 25 лет. С 1992 г. ООО «Техцентр Сервис-Авто»*/}
            {/*    ремонтирует авто марок {name}. За годы бесценной практики наши специалисты детально изучили*/}
            {/*    машины данных марок и научились быстро диагностировать любые неполадки.*/}
            {/*</p>*/}

            {/*<h2> Типичные неисправности {name}</h2>*/}
            {/*<p>*/}
            {/*    Одной из самых популярных моделей у данного производителя является Астра. Автомобиль выпускается с*/}
            {/*    1991 года, активно продается в ряде стран, включая Россию. Astra полюбился многим за низкую*/}
            {/*    стоимость, неплохое качество, но как большинсво бюджетных авто, часто заезжает на ремонт.*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    Одна из болячек — это термостат. Когда деталь выходит из строя, вентилятор системы охлаждения*/}
            {/*    начинает вращаться без остановок. Это отображается на панели приборов. Также изнашивается прокладка,*/}
            {/*    приводящая к течи охлаждающей жидкости. Ее также меняют вместе с термостатом во время обслуживания.*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    Для кузовов «J» и «H» характерны поломки автоматической коробки передач, роботизированной КПП и*/}
            {/*    наконечников рулевых тяг. Последние «ходят» не более 30 тыс. км. Ремонт «автомата» чаще всего вызван*/}
            {/*    попаданием охлаждающей жидкости внутрь контура АКПП. Причина — разгерметизация радиатора.*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    Другим популярным автомобилем марки Opel является семейный минивэн Зафира. Его болячки главным*/}
            {/*    образом находятся в двигателе и подвеске. Проблемы с коробкой передач тоже случаются, но их причиной*/}
            {/*    является некачественное масло. В дизельных моторах «ахиллесовой пятой» признаны топливные форсунки.*/}
            {/*    Как бензиновые так и дизельные агрегаты Опель Зафира оснащаются ременным приводом ГРМ. Ремень*/}
            {/*    обрывается через 120-130 тыс. км пробега. Поскольку определить его износ визуально нелегко, а обрыв*/}
            {/*    ремня приводит к фатальному повреждению шатунно-поршневой группы, а как результат к дорогостоящему*/}
            {/*    ремонту, необходимо регулярно обращаться на СТО для техобслуживания.*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    Компактный хэтчбек Opel Corsa часто заезжает на СТО из-за селектора автоматической коробки передач,*/}
            {/*    печки салона и проводки. Электрика в моторном отсеке не защищена, поэтому после автомойки нередко*/}
            {/*    происходит замыкание. Другой характерной неисправностью авто является заклинивание рычага*/}
            {/*    переключения КПП. Он перестает сдвигаться в положение «P». Ремонт путем замены селектора позволяет*/}
            {/*    решить данную проблему.*/}
            {/*</p>*/}
        </section>
    );
};

export default BrandArticle;