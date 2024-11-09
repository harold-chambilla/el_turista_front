<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Attribute\Route;

class SettingController extends AbstractController
{
    // #[Route('/', name: 'app_redirect')]
    // public function index(): Response
    // {
    //     return $this->redirectToRoute('app_login');
    // }

    // #[Route('/error', name: 'app_redirect_error')]
    // public function error(): Response
    // {
    //     $exception = new NotFoundHttpException('Página no encontrada');
    //     return $this->render('landing_page/componentes/error_404.html.twig', [
    //         'exception' => $exception,
    //     ]);
    // }
}