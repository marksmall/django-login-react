import subprocess

from django.core.management.base import BaseCommand, CommandError


class Command(BaseCommand):
    """ Command to run tests """
    help = "Run server tests in single vs. watch mode"

    def add_arguments(self, parser):
        """ Add custom arguments """
        parser.add_argument("--single",
                            action="store_true",
                            help="Run tests just once")
        parser.add_argument("files", nargs="*", help="Run only file|dir tests")

    def handle(self, *args, **options):
        """ Handle running of tests """
        mode = options["single"]

        cmd = None
        if mode:
            cmd = ["pytest", *options["files"]
                   ] if options["files"] else ["pytest"]
        else:
            cmd = ["ptw", *options["files"]] if options["files"] else ["ptw"]

        command = " ".join(cmd)
        self.stdout.write(f"Running: {command}")

        subprocess.run(command, shell=True)
