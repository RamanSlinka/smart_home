import jsonServer from 'json-server';
 import mockData from './mockData/index'


const server = jsonServer.create();
const router = jsonServer.router(mockData);
const middlewares = jsonServer.defaults();

server.use(middlewares)

server.use(
    jsonServer.rewriter({
        "/api/v1/*": "/$1",
    })
)

server.use(router)


export const toDevicesSummary = (devices) => ({

    // id: devices.id,
    // type: devices.type,
    // name: devices.name,
    // connectionState: devices.connectionState,

    isTurnedOn: devices.isTurnedOn,
    brightness: devices.brightness,
    color: devices.color,
    powerConsumption: devices.powerConsumption,
    temperature: devices.temperature

})



// @ts-ignore
router.render = (req, res) => {
    const url = req.originalUrl;
    const data = res.locals.data

    if(url === '/api/v1/devices' && req.method === 'GET') {
        const mappedData = data.map(toDevicesSummary);
        res.jsonp(mappedData);
    } else res.jsonp(data)
}

server.listen(3001, () => {
    console.log('JSON Server is running')
})