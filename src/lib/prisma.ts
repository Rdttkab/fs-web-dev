import Prisma, * as PrsimaAll from "@prisma/client";

const PrsimaClient = Prisma?.PrismaClient || PrsimaAll?.PrismaClient

export default PrsimaClient