import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, '0.0.0.0');
  console.log(`🚀 Server started at ${await app.getUrl()}`);
}
bootstrap();
