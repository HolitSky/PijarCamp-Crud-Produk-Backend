import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Produk = db.define(
  "produk",
  {
    nama_produk: DataTypes.STRING(255),
    keterangan: DataTypes.STRING(500),
    harga: DataTypes.DECIMAL(16, 2),
    jumlah: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default Produk;

(async () => {
  await db.sync();
})();
