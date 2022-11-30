import "jest"

const Connection = require('../src/database/connection');
import ItemsController from "../src/controller/ItemsController";

jest.mock('../src/database/connection');

it('CREATE - Dado válido', async () => {
    const data = {
        id: "1",
        title: "mercado",
        image: "xxxxx"
    }

    Connection("items").select("*").mockReturnValue(data);
    const itemsController = new ItemsController();

    const result = await itemsController.index;
    expect(result).toEqual({ ...data });
})

