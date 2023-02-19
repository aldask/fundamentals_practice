const random = {
    title: "name",
    value: 513130
}


const func = ({title}) => {
    console.log(`Title name: ${title}`);
}

func(random);

const random1 = {
    title: "name1",
    field1: "value1",
    field2: "value1"
};
const random2 = {
    title: "name2",
    field3: "value2",
    field4: "value2"
};

func(random1);
func(random2);
