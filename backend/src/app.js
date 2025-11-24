import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
  origin: `${process.env.FRONTEND_URL}`,
  credentials: true,
}));
app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({limit: '16kb', extended: true}))
app.use(express.static('public'))

app.use(cookieParser())

app.get('/',(req,res) => {
  res.send('Smart menu API is Live')
})

import vendorRoutes from './routes/vendor.routes.js'
import categoryRoutes from './routes/category.routes.js'
import menuItemRoutes from './routes/menuItem.routes.js'
import qrRoutes from './routes/qr.routes.js'
import publicRoutes from "./routes/public.routes.js";

app.use("/api/vendor",vendorRoutes)
app.use("/api/category",categoryRoutes)
app.use("/api/item",menuItemRoutes)
app.use("/api/qr",qrRoutes)
app.use("/api/public", publicRoutes);

export default app

