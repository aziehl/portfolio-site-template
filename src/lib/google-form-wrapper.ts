import { GoogleForm, FieldsOrder, Field } from 'react-google-forms-hooks'

//  remove ids
const fields: Field[] = [
    {
        label: 'Name',
        description: "",
        type: 'SHORT_ANSWER',
        id: '2005620554',
        required: true
    },
    {
        label: 'Email',
        description: "",
        type: 'SHORT_ANSWER',
        id: '1045781291',
        required: true
    },
    {
        label: 'Message',
        description: "",
        type: 'LONG_ANSWER',
        id: '839337160',
        required: true
    }
];

const fieldOrder: FieldsOrder = {
    "2005620554": 0, "1045781291": 1, "839337160": 2
}
export const formValues: GoogleForm =
{
    title: "Contact",
    description: "Contact Me",
    fvv: 1,
    pageHistory: 0,
    fbzx: "-7416937844582121423",
    action: "e/1FAIpQLSd42f8k1B1hE3efOlN3ESaxX8S02PlFPyz_lbdAvnfxCKsWCg",
    fields: fields,
    fieldsOrder: fieldOrder
}