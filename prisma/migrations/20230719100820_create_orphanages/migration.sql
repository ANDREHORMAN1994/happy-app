-- CreateTable
CREATE TABLE "Orphanage" (
    "id" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "lng" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "images" TEXT[],
    "firstImage" TEXT,
    "instructions" TEXT NOT NULL,
    "opening_hours" TEXT NOT NULL,
    "open_on_weekends" BOOLEAN NOT NULL,

    CONSTRAINT "Orphanage_pkey" PRIMARY KEY ("id")
);
